pipeline {
    agent any

    environment {
        PATH = "/var/lib/jenkins/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin"
    }

    stages {
        stage('Checkout SCM') {
            steps {
                git 'https://github.com/Nevaashahan/medicine_dev'
            }
        }
        stage('Build Front-end') {
            steps {
                dir('front-end') {
                    script {
                        // Build Docker image for client
                        sh 'docker build -t front-end-image:latest -f Dockerfile .'
                        sh 'docker ps'
                    }
                }
            }
        }
        stage('Install Docker Compose') {
            steps {
                script {
                    sh '''
                    if ! [ -x "$(command -v docker-compose)" ]; then
                        echo "docker-compose not found, installing..."
                        curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /tmp/docker-compose
                        chmod +x /tmp/docker-compose
                        mkdir -p /var/lib/jenkins/bin
                        mv /tmp/docker-compose /var/lib/jenkins/bin/docker-compose
                    else
                        echo "docker-compose is already installed"
                    fi
                    '''
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker-compose down --remove-orphans'
                    sh 'docker-compose up -d'
                    sh 'docker ps -a'
                    sh 'docker-compose logs client'
                }
            }
        }
    }
}
