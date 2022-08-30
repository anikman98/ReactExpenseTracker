import React from 'react';
import PageLink from '../../../interface/PageLink';
import {InertiaLink} from '@inertiajs/inertia-react';

interface Props{
    links: Array<any>
}

const Pagination: React.FC<Props> = ({links}) => {
    console.log(links);
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            {
                links.map((link: PageLink, index: number) => {
                    return (
                        <li className={`page-item ${link.url === null && "disabled"} ${link.active && "active"}`}>
                            <InertiaLink className='page-link' href={link.url || "#"}>
                                    {link.label === "&laquo; Previous" ? "Previous" : (link.label === "Next &raquo;" ? "Next" : link.label)}
                            </InertiaLink>
                        </li>
                    )
                })
            }
            
        </ul>
    </nav>
  )
}

export default Pagination;
