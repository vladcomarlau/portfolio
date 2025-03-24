pipeline {
  agent {
    kubernetes {
      yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: kaniko
spec:
  serviceAccountName: jenkins-sa
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug    #<- pt a nu da eroare de lipsa de   sh  sau   bash
    command:
      - cat                          #<- asta pastreaza pod-ul sa nu se inchida imediat
    tty: true
    volumeMounts:
      - name: kaniko-secret
        mountPath: /kaniko/.docker
  - name: kubectl
    image: lachlanevenson/k8s-kubectl:latest
    command:
      - cat
    tty: true
  restartPolicy: Never
  volumes:
  - name: kaniko-secret
    secret:
      secretName: kaniko-secret               #<- neaparat secretul sa fie in acelasi namespace ca jenkins
      items:
      - key: .dockerconfigjson
        path: config.json
'''
    }
  }
  stages {
    stage('Checkout') {
        steps {
            // Explicitly checkout the repository.
            git url: 'https://github.com/vladcomarlau/portfolio.git', branch: 'master'
        }
    }
    stage('Build & Push Image') {
        steps {
            container('kaniko') {
                sh '/kaniko/executor --dockerfile=/dockerfile --context=git://github.com/vladcomarlau/portfolio.git --destination=registry.comarlau.com/portfolio:latest'
            }
        }
    }
    stage('Deploy Image') {
        steps {
            container('kubectl') {
              sh '''
                kubectl -n default apply -f portfolio-frontend.yaml
                kubectl -n default rollout restart deployment/portfolio-frontend
              '''
            }
        }
    }
  }
}
