pipeline {
    agent none
    stages {
        stage('Clone repository') {
            steps {
                echo 'Checkout...'
                checkout scm
            }
        }
        stage('build') {
            steps {
                echo 'Building...'
                dockerImage = docker.build("registry.comarlau.com/portfolio:${env.BUILD_NUMBER}")
            }
        }
    }
}
