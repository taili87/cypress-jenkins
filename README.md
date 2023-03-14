# echo "# cypress-jenkins" >> README.md
# git init
# git add README.md
# git commit -m "first commit"
# git branch -M master
# git remote add origin https://github.com/taili87/cypress-jenkins.git
# git push -u origin master

# JenkinsFile


pipeline{
    agent any 

    stages{
        stage("build"){
            steps{
               echo 'building the application'
            }
        }

        stage("test"){
            when{
                expression{
                    env.BRANCH_NAME == 'dev' && 'master' == true 
                }
            }
            steps{
                echo 'testing the application'
            }
        }

        stage("deploy"){
            steps{
                echo 'deploying the application'
            }
        }

        
    }
}

