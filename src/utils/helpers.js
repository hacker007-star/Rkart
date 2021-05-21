import url from './URL';


export function flattenProducts(data){
  return data.map(item => {
    //cloudinary
    // let image = item.image[0].url;
    // return {...item,image}
    
    //local fix
    // let image = `${url}${item.image.url}`;
    return {...item,image:`${url}${item.image[0].url}`};
  })

}



// helper functions
export function featuredProducts(data) {
    return data.filter(item => {
      return item.featured === true;
    });
  }
  