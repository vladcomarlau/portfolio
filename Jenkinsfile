pipeline {
    agent {
        docker {
            image 'docker:latest'
        }
    }
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
                script {
                    dockerImage = docker.build("registry.comarlau.com/portfolio:${env.BUILD_NUMBER}")
                }
            }
        }
    }
}
