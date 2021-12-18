class Task{
    constructor(node, adat){
        this.node=node;
        this.adat= adat;
        // this.datumElem = $("#datum");
        // this.felelosElem = $("#felelos");

        this.targyElem=this.node.children(".targy");
        this.leirasElem=this.node.children(".leiras");
        this.datumElem=this.node.children ("#datum");
        this.felelosElem=this.node.children("#felelos");
        this.statuszElem=this.node.children("#statusz");
        console.log(this.datumElem);
        this.setAdat(this.adat);
          
    }
    setAdat(adat){
        // console.log(this.adat);
        this.targyElem.html(adat.targy);
        this.leirasElem.html(adat.leiras);
        this.datumElem.html(adat.datum);
        this.felelosElem.html(adat.felelos);
        this.statuszElem.html(adat.statusz);
        
    }

}
