pipeline {
    stages {
        stage('build') {
            steps {
                echo 'Building...'
                dockerImage = docker.build("registry.comarlau.com/portfolio:${env.BUILD_NUMBER}")
            }
        }
    }
}
