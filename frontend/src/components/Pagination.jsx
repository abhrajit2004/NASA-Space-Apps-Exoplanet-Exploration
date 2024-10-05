import './Pagination.scss';

const Pagination = ({ currentPage, totalPages, isMobile, handlePageChange, isLoading, searchQuery }) => {
    const renderPageNumbers = () => {
        const pageNumbers = []; 

        if(totalPages < 7) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(
                    <button key={`page-${i}`} onClick={() => handlePageChange(i)} className={`mx-1 px-2 py-1 border rounded ${currentPage === i ? 'bg-gray-500/60 current-page text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {i}
                    </button>
                );
            }

            return pageNumbers;
        }

        // Show fewer numbers for mobile
        if (isMobile) {
            if (currentPage > 1) {
                pageNumbers.push(
                    <button key="first" aria-label='goto-first-page' onClick={() => handlePageChange(1)} className="mx-1 px-2 py-1 border rounded">«</button>
                );
            }

            let start = Math.max(1, currentPage - 1);
            let end = Math.min(totalPages, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pageNumbers.push(
                    <button key={`page-${i}`} onClick={() => handlePageChange(i)} className={`mx-1 px-2 py-1 border rounded ${currentPage === i ? 'bg-gray-500/60 current-page text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {i}
                    </button>
                );
            }

            if (currentPage < totalPages) {
                pageNumbers.push(
                    <button key="last" aria-label='goto-last-page' onClick={() => handlePageChange(totalPages)} className="mx-1 px-2 py-1 border rounded">»</button>
                );
            }
        } else {
            // Show first page button
            if (currentPage > 1) {
                pageNumbers.push(
                    <button key="first" aria-label='goto-first-page' onClick={() => handlePageChange(1)} className="mx-1 px-3 py-1 border rounded">«</button>
                );
            }
            
            // Show first 3 pages always
            for (let i = 1; i <= 3; i++) {
                if (i <= totalPages) {
                    pageNumbers.push(
                        <button key={`first-page-${i}`} onClick={() => handlePageChange(i)} className={`mx-1 px-3 py-1 border rounded ${currentPage === i ? 'bg-gray-500/60 current-page text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {i}
                        </button>
                    );
                }
            }

            // Show dots if currentPage is not close to the start
            if (totalPages > 6 && currentPage > 4) {
                pageNumbers.push(<span key="dots-start" className="mx-2">...</span>);
            }

            // Show the middle pages
            let start = Math.max(4, currentPage - 1);
            let end = Math.min(totalPages - 2, currentPage + 1);
            for (let i = start; i <= end; i++) {
                if (i <= totalPages - 3 && i > 3) {
                    pageNumbers.push(
                        <button key={`middle-page-${i}`} onClick={() => handlePageChange(i)} className={`mx-1 px-3 py-1 border rounded ${currentPage === i ? 'bg-gray-500/60 current-page text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {i}
                        </button>
                    );
                }
            }
            
            // Show dots if currentPage is not close to the end
            if (totalPages > 6 && currentPage < totalPages - 3) {
                pageNumbers.push(<span key="dots-end" className="mx-2">...</span>);
            }

            // Show last 3 pages always
            for (let i = totalPages - 2; i <= totalPages; i++) {
                if (i > 0) {
                    pageNumbers.push(
                        <button key={`last-page-${i}`} onClick={() => handlePageChange(i)} className={`mx-1 px-3 py-1 border rounded ${currentPage === i ? 'bg-gray-500/60 current-page text-white' : 'bg-gray-200 text-gray-700'}`}>
                            {i}
                        </button>
                    );
                }
            }

            // Show last page button
            if (currentPage < totalPages) {
                pageNumbers.push(
                    <button key="last" aria-label='goto-last-page' onClick={() => handlePageChange(totalPages)} className="mx-1 px-3 py-1 border rounded">»</button>
                );
            }
        }
        
        
        return pageNumbers;
    };

    return (
        
            <div className="flex page-numbers justify-center mt-5 font-bold">
                {!isLoading && renderPageNumbers()}
            </div>
    );
};

export default Pagination;