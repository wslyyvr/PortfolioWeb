import { useState, useEffect } from "react";
import './MainContainer.scss';
import ProductCard from '../ProductCard/ProductCard.jsx';
import data from '../../assets/data.json';
import { motion, AnimatePresence } from "framer-motion";

function MainContainer() {

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState("All");

    // dropdown state
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    //get all type
    const types = ["All", ...Array.from(new Set(data.product.map(p => p.type)))];

    // count type number
    const getCount = (type) =>
        type === "All"
            ? data.product.length
            : data.product.filter(p => p.type === type).length;

    //filter 
    const filteredProducts =
        filterType === "All"
            ? data.product
            : data.product.filter(p => p.type === filterType);

    const totalPages = Math.max(
        1,
        Math.ceil(filteredProducts.length / itemsPerPage)
    );


    const startIndex = (currentPage - 1) * itemsPerPage;

    const currentProducts =
        filteredProducts.slice(startIndex, startIndex + itemsPerPage);

    //check screen size
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => {
            const width = window.innerWidth;
            setIsMobile(width >= 375 && width <= 767);
        };

        checkScreen();
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // close dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!e.target.closest(".custom-dropdown")) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className='product-area'>

            <h1>My Projects</h1>
            <div className='main-part_bar'></div>

            <div className="mian-display_area">

                {/* Filter Area */}
                <div className="filter-bar">

                    {isMobile ? (
                        // Mobile dropdown
                        <div className="custom-dropdown">
                            <button
                                className="dropdown-btn"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                <span>{filterType} ({getCount(filterType)})</span>

                                {/* Framer Motion pointer*/}
                                <motion.span
                                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="arrow"
                                >
                                  ▼
                                </motion.span>
                            </button>

                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    {types.map((type) => (
                                        <div
                                            key={type}
                                            className={`dropdown-item ${filterType === type ? "active" : ""
                                                }`}
                                            onClick={() => {
                                                setFilterType(type);
                                                setCurrentPage(1);
                                                setIsDropdownOpen(false);
                                            }}
                                        >
                                            {type} ({getCount(type)})
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    ) : (
                        // PC / iPad buttons
                        types.map((type) => (
                            <button
                                key={type}
                                className={filterType === type ? "active" : ""}
                                onClick={() => {
                                    setFilterType(type);
                                    setCurrentPage(1);
                                }}
                            >
                                {type} ({getCount(type)})
                            </button>
                        ))
                    )}

                </div>

                {/*  Product Area */}
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

                {/* Page dispaly */}
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