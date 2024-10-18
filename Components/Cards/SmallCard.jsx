import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'; // HTML desteği için

const SmallCard = ({ title, content, id }) => {
  return (
    <a href={`/blog/${id}`} className="w-full min-w-96">
      <div className='group relative border border-neutral-800 bg-opacity-20 bg-neutral-900 rounded-lg '>
        <div className='py-4 px-6 flex flex-col items-start gap-3 relative group'>
          <div className='flex flex-col items-start gap-2'>
            <div className='w-full flex items-center gap-8 transition-all duration-300 text-neutral-400 '>
              <h4 className='text-sm md:text-xl font-medium text-neutral-300 line-clamp-1 tracking-wide'>
                {title}
              </h4>

              <span className="group-hover:translate-x-2 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 7L6 18m5-11.868s5.634-.475 6.488.38c.855.854.38 6.488.38 6.488" color="#ffffff" /></svg>
              </span>
            </div>

            {/* İçerik - Markdown ve HTML desteği */}
            <ReactMarkdown rehypePlugins={[rehypeRaw]} className='text-xs md:text-base text-neutral-500 line-clamp-1 md:line-clamp-2'>
              {content}
            </ReactMarkdown>
          </div>

          <span className='text-neutral-500 text-[10px] md:text-sm px-2 py-1 border border-neutral-800'>Software</span>
        </div>
      </div>
    </a>
  );
}

export default SmallCard;
