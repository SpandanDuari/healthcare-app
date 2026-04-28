pipeline {
    agent any

    environment {
        IMAGE_NAME = "healthcare-app"
    }

    stages {

        stage('Clone Repository') {
            steps {
                echo "Cloning code..."
                git branch: 'main', url: 'https://github.com/SpandanDuari/healthcare-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing dependencies..."
                bat 'npm install'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo "Building Docker image..."
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo "Deploying to Kubernetes..."
                bat 'kubectl apply -f deployment.yaml'
                bat 'kubectl apply -f service.yaml'
            }
        }
    }

    post {
        success {
            echo 'Deployment successful!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}