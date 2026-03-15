import { useState } from "react";
import './MainContainer.scss';
import ProductCard from '../ProductCard/ProductCard.jsx';
import data from '../../assets/data.json';
import { motion, AnimatePresence } from "framer-motion"; // work for card display


function MainContainer() {

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState("All");


    // get all type
    const types = ["All", ...Array.from(new Set(data.product.map(p => p.type)))];

    const filteredProducts =
        filterType === "All"
            ? data.product
            : data.product.filter(p => p.type === filterType);

    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentProducts =
        filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='product-area'>

            <h1>My Projects</h1>
            <div className='main-part_bar'></div>

            {/* Page Type Area */}
            <div className="mian-display_area">
                <div className="filter-bar">
                    {types.map((type) => {
                        // get number for each type
                        const count =
                            type === "All"
                                ? data.product.length
                                : data.product.filter(p => p.type === type).length;

                        return (
                            <button
                                key={type}
                                className={filterType === type ? "active" : ""}
                                onClick={() => {
                                    setFilterType(type);
                                    setCurrentPage(1); //
                                }}
                            >
                                {type} ({count})
                            </button>
                        );
                    })}
                </div>

                {/*case show */}
                <div className='show-area'>
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={filterType + currentPage}
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -200, opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            {currentProducts.map((product, index) => (
                                <ProductCard
                                    key={product.name}
                                    product={product}
                                    index={startIndex + index}
                                />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Page Number Area */}
                <div className="pagination">

                    <button
                        onClick={() => setCurrentPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="backward"
                    >
                        {"<"}
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            className={currentPage === i + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="forward"
                    >
                        {">"}
                    </button>

                </div>
            </div>

        </div>
    );
}

export default MainContainer;