export type Mode='guided'|'expert'|'improve';
export type Message={id:string;role:'user'|'assistant';content:string;timestamp:number};
export type Project={name:string;objective:string;audience:string;productType:string;features:string[];screens:string[];technologies:string[];architecture:string;database:string;security:string;integrations:string[];confirmed:string[];recommendations:string[];pending:string[]};
export type ChatResponse={reply:string;project:Project;suggestedQuestions:string[];readiness:number;masterPrompt:string};
export const emptyProject=():Project=>({name:'',objective:'',audience:'',productType:'',features:[],screens:[],technologies:[],architecture:'',database:'',security:'',integrations:[],confirmed:[],recommendations:[],pending:[]});
