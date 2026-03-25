let shouldError = true;

export default function About() {
//   if (shouldError) {
//     shouldError = false;
//     throw new Error("Temporary error!");
//   }

  return <h1>About Page Loaded Successfully ✅</h1>;
}

export const metadata = {
    title: 'About',
    description: 'This is the about page'
}
//metadata from layout will be merged 
// with metadata from page, 
// and page metadata will override
// layout metadata if there is a conflict.