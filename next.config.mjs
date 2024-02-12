import remarkGfm from 'remark-gfm';
import createMDX from '@next/mdx';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    // output: 'export',
    // images: {
    //     unoptimized: true
    // }
   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
};

 
const withMDX = createMDX({
    // Add markdown plugins here, as desired
    options: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  })
   
  // Merge MDX config with Next.js config
  export default withMDX(nextConfig)