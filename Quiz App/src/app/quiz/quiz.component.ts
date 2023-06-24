import { Component,OnInit } from '@angular/core';
interface Question{
  question:string;
  options:string[];
  answer:number;
}
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit{
  categories=["Science","History","Sports"]
  difficulties=["Easy","Medium","Hard"]
  questions:Question[]=[
    {
      question:"Question 1 ",
      options:["Option 1","Option 2","Option 3","Option 4"],
      answer: 0
    },
    {
      question:"Question 1 ",
      options:["Option 1","Option 2","Option 3","Option 4"],
      answer: 1
    },
    {
      question:"Question 1 ",
      options:["Option 1","Option 2","Option 3","Option 4"],
      answer: 2
    }
  ];
  category!: string;
  difficulty!: string;
  currentQuestionIndex!: number;
  totalQuestions!: number;
  question!: string;
  options!: string[];
  answered!: boolean;
  selectedOption!: number;
  showTimer!: boolean;
  timeLeft!: number;
  score!: number;
  isFinished!: boolean;
  constructor(){}

  ngOnInit() {
    this.category=this.categories[Math.floor(Math.random()*this.categories.length)];
    this.difficulty=this.difficulties[Math.floor(Math.random()*this.difficulties.length)];
    this.totalQuestions=this.questions.length;
    this.score=0;
    this.isFinished=false;
    this.showNextQuestion();
  }

  showNextQuestion(){
    if( this.currentQuestionIndex=== this.totalQuestions){
      this.finishQuiz();
      return;
    }
    const curreentQuestions=this.questions[this.currentQuestionIndex];
    this.question=curreentQuestions.question;
    this.options= curreentQuestions.options;
    this.answered =false;
    this.selectedOption=0;
   
    this.showTimer=true;
    this.timeLeft=10;
    const timer =setInterval(()=>{
      this.timeLeft--;
      if(this.timeLeft===0){
        clearInterval(timer);
        this.nextQuestion();
      }
    },1000)
  }

  selectOption(index:number){
    this.selectedOption=index;
    this.answered=true;
  }
  nextQuestion(){
    if(!this.answered){
      return;
    }
    if(this.selectedOption===this.questions[this.currentQuestionIndex].answer){
      this.score++;
    }
    this.currentQuestionIndex++;
    this.showNextQuestion();
  }
  finishQuiz(){
    this.isFinished=true;
    this.showTimer=false;
  }

  restartQuiz(){
    this.currentQuestionIndex=0;
    this.score=0;
    this.isFinished=false;
    this.showNextQuestion()
  }
}
