pipeline {
    agent any
    stages {
        stage('Checkout SCM') {
            steps {
                git 'https://github.com/Nevaashahan/medicine_dev'
            }
        }
        stage('Build Front-end') {
            steps {
                dir('front-end/frontend') {
                    script {
                        sh 'docker build -t front-end-image:latest -f Dockerfile .'
                    }
                }
            }
        }
        stage('Install Docker Compose') {
            steps {
                // Commands to install Docker Compose, if necessary
            }
        }
        stage('Deploy') {
            steps {
                // Deployment steps
            }
        }
    }
}
