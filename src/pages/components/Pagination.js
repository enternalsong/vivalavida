
const Pagination=({pagination, getProducts})=>{
    return(
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item">
            <a className="page-link" href="/" aria-label="Previous"
            onClick={(e)=>{
                e.preventDefault();
                if(pagination.current_page===1)
                {}
                else{
                    getProducts(pagination.current_page-1);
                }
            }}>
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            {
            [...new Array(pagination.total_pages)].map((_, i) => ( //index 0-4
            // eslint-disable-next-line react/no-array-index-key
            <li className="page-item" key={`${i}_page`}>
                <a
                className={`page-link ${(i + 1 === pagination.current_page) && 'active'}`}
                href="/" onClick={(e)=>{
                    e.preventDefault();
                    getProducts(i+1);
                }}
                >
                {i + 1}
                </a>

            </li>
            ))
        }
            <li className="page-item">
            <a className="page-link" href="/" aria-label="Next"                 onClick={(e)=>{
                e.preventDefault();
                if(pagination.current_page===pagination.total_pages)
                {}
                else{
                    getProducts(pagination.current_page+1);
                }
            }}>
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
    )
}
export default Pagination;