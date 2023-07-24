type Beer = Record<string, any>;

  const getBeerById = async (id:string): Promise<Beer> => {
    const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
    const [beer] = await response.json();
    
    return beer;
  };

type Props = {
    params:  {
        beerId: string;
    }
}

export default async function Page({params}: Props) {
    const {beerId} = params;
    const beer = await getBeerById(beerId);
  return (
    <div>
        <p>{beerId} - {beer.name}</p> 
    </div>
  )
}