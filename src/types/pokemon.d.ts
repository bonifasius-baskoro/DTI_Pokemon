type pokemonNameDetail={
        name: string;
        id: number;
        health: number;
        attack: number;
        defense: number;
        spriteFront: string;
        artworkFront: string;
        type:string;
}

type pokemonNameDetailList={
    data:pokemonNameDetail[] , loading : boolean , error : boolean
}


type pokemonName={
    name:string;
    url:string;
}

type pokemonNameList= {data:pokemonName[]
    ,loading:boolean, error:boolean}