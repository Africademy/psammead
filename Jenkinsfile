#!/usr/bin/env groovy

def dockerRegistry = "329802642264.dkr.ecr.eu-west-1.amazonaws.com"
def nodeImageVersion = "0.0.5"
def nodeImage = "${dockerRegistry}/bbc-news/node-8-lts:${nodeImageVersion}"
def nodeName
def stageName = ""
def getCommitInfo = {
  infraGitCommitAuthor = sh(returnStdout: true, script: "git --no-pager show -s --format='%an' ${GIT_COMMIT}").trim()
  appGitCommit = sh(returnStdout: true, script: "cd ${APP_DIRECTORY}; git rev-parse HEAD")
  appGitCommitAuthor = sh(returnStdout: true, script: "cd ${APP_DIRECTORY}; git --no-pager show -s --format='%an' ${appGitCommit}").trim()
  appGitCommitMessage = sh(returnStdout: true, script: "cd ${APP_DIRECTORY}; git log -1 --pretty=%B").trim()
}

def notifySlack(colour, buildStatus, infraGitCommitAuthor, gitCommit, gitCommitAuthor, gitCommitMessage, stageName) {
  // call the global slackSend method in Jenkins
  slackSend(color: colour, message: "${buildStatus}: ${infraGitCommitAuthor} [#${appGitCommit}] (<${appGitCommitAuthor} ${appGitCommitMessage}) ${stageName}", channel: '#psammead')
}

pipeline {
  agent any
  options {
    timeout(time: 60, unit: 'MINUTES')
    timestamps ()
  }
  environment {
    APP_DIRECTORY = "app"
    CI = true
  }
  stages {
    stage('Checkout application repo') {
      when {
        expression { env.BRANCH_NAME != 'latest' }
      }
      agent {
        docker {
          image "${nodeImage}"
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh "rm -rf ${env.APP_DIRECTORY}"
        checkout([
          $class: 'GitSCM',
          branches: [[name: "*/${env.BRANCH_NAME}"]],
          doGenerateSubmoduleConfigurations: false,
          extensions: [[
            $class: 'RelativeTargetDirectory',
            relativeTargetDir: "${env.APP_DIRECTORY}"
          ]],
          submoduleCfg: [],
          userRemoteConfigs: [[
            credentialsId: 'github',
            name: "origin/${env.BRANCH_NAME}",
            url: 'https://github.com/bbc-news/psammead.git'
          ]]
        ])
        script {
          getCommitInfo()
          nodeName = "${env.node_name}".toString()
        }
      }
      post {
        always {
          script {
            stageName = env.STAGE_NAME
          }
        }
      }
    }
    stage ('Run application tests') {
      when {
        expression { env.BRANCH_NAME != 'latest' }
      }
      agent {
        docker {
          image "${nodeImage}"
          label nodeName
          args '-u root -v /etc/pki:/certs'
        }
      }
      steps {
        sh 'make install'
        sh 'make tests'
      }
      post {
        always {
          script {
            stageName = env.STAGE_NAME
          }
        }
      }
    }
  }
  post {
    aborted {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Aborted', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName)
      }
    }
    failure {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Failed', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName)
      }
    }
    success {
      script {
        if (params.BRANCH == 'latest') {
          notifySlack('good', 'Success', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName)
        }
      }
    }
    unstable {
      script {
        def messageColor = 'warning'
        if (params.BRANCH == 'latest' && GIT_BRANCH == 'latest') {
          messageColor = 'danger'
        }
        notifySlack(messageColor, 'Unstable', infraGitCommitAuthor, appGitCommit, appGitCommitAuthor, appGitCommitMessage, stageName)
      }
    }
  }
}
