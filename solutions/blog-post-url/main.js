/*
  Punctuation to remove
  [!@#$%^&*()_+={}.,:'"/~`;[\[\]]
*/

function blogify(title){
    const urlBase = 'https://www.myblog.com';
    //replace white space with hyphens
    const noSpaces = title.replace(/\s+/g, "-");
    //lowercasecapital letters
    const lowercase = noSpaces.toLowerCase();
    //remove punctuation
    const noPunctuationRegex = /[!@#$%^&*()_+={}.,:'"/~`;[\[\]]/g;
    const noPunctuation = lowercase.replace(noPunctuationRegex, '');
    //no consecutive hyphens
    const noConsecutiveHyphens = noPunctuation.replace(/[-]{2,}/g, "-");
    //remove trailing hyphen
    /*
    let noTrailingHyphen = noConsecutiveHyphens
    if(noTrailingHyphen.endsWith('-')){
        noTrailingHyphen = noConsecutiveHyphens.slice(0, noConsecutiveHyphens.length - 1)
    }
    console.log(noTrailingHyphen);
    */
   const noTrailingHyphen = noConsecutiveHyphens.replace(/-$/, '');

   return `${urlBase}/${noTrailingHyphen}`
}


const blogs = [
    "My Summer Studying Abroad!!!",
    "Emma's Favorite Books :)",
    "Best Stockholm restaurants in 2021",
    "There  are a     ton of   spaces",
    'This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation"',
  ];

  blogs.forEach((blog) => console.log(blogify(blog)));