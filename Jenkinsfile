pipeline {
    agent any

    stages {
        stage('Clone repository') {
            steps {
                script {
                    git url: 'https://github.com/Nevaashahan/medicine_dev.git', branch : 'main'
                }
            }
        }
        stage('Build Docker images') {
            steps {
                sh 'docker-compose build'
            }
        }
        stage('Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}


        // stage('Build Back-end') {
        //     steps {
        //         dir('back-end') {
        //             script {
        //                 // Build custom Maven image with Java 20
        //                 sh '''
        //                 docker build -t custom-maven-java20 -f Dockerfile-maven-java20 .
        //                 '''
        //                 // Use the custom Maven Docker image to build Spring Boot application
        //                 docker.image('custom-maven-java20').inside {
        //                     sh 'mvn clean package -DskipTests'
        //                 }
        //                 // Build Docker image for server
        //                 sh 'docker build -t back-end-image:latest -f Dockerfile .'
        //             }
        //         }
        //     }
        // }
