function tOH(disk, source, dest, aux){
    if( disk == 1){
        console.log("move"+ disk + "from" + source + "to" + dest);
    }
    else{
        tOH(disk-1 , source,aux, dest);
        console.log("move" + disk + "from" + source + "to" + dest);
        tOH(disk-1 + "from" + aux + dest + "to" + source);
    }

}
tOH(3,"a","b","c");