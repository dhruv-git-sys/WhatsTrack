class ReactionDataProcessor{
    constructor(){
        this.reactionData=new Map();
        this.setupMessageListener();
        this.setupActionClick();
    }
    setupMessageListener(){
        chrome.runtime.onMessage.addListener((request,sender,sendResponse)=>{
            let willRespondAsync=false;
            switch(request.type){
                case 'REACTION_DATA-UPDATE':
                    this.updateReactionData(request.data);
                    break;
                case "DUMP_CORPUS":
                    try{
                        const corpus=this.dumpCorpus();
                        sendResponse({
                            corpus
                        });
                    }catch(e){
                        sendResponse({error:String(e&&e.message||e)});
                    }
                    break;
                case 'IMPORT_CORPUS':
                    try{
                        const {corpus}=request;
                        if(corpus&&typeof corpus==='object'){
                            
                        }
                    }
            }
        })
    }
}