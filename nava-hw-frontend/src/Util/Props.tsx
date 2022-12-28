export interface Picture{
    name: string,
    creator: string,
    picture_id: number,
}

export interface TableProps{
    picture:Picture[]
    setPictures:(picture: Picture[]) => void
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}

export interface ElementProps{
    picture: Picture[]
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}

export interface DataProps{
    picture:Picture
    setName:(name:string) => void
    setCreator:(name:string) => void
    setPictureId:(picture_is:number) => void
}
