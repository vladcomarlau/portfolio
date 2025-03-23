pipeline {
  agent {
    kubernetes {
      label 'kaniko'
      yaml '''
apiVersion: v1
kind: Pod
metadata:
  name: kaniko
spec:
  containers:
  - name: kaniko
    image: gcr.io/kaniko-project/executor:debug    #<- pt a nu da eroare de lipsa de   sh  sau   bash
    command:
      - cat                          #<- asta pastreaza pod-ul in viata sa nu se inchida imediat
    tty: true
    volumeMounts:
      - name: kaniko-secret
        mountPath: /kaniko/.docker
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
    stage('Build & Push Image') {
      steps {
        container('kaniko') {
          // Run the Kaniko executor command
          sh '/kaniko/executor --dockerfile=/dockerfile --context=git://github.com/vladcomarlau/portfolio.git --destination=registry.comarlau.com/portfolio:latest'
        }
      }
    }
  }
}