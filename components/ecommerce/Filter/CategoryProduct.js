import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct = ({ updateProductCategory }) => {
    const router = useRouter();

    const selectCategory = (e, category) => {
        e.preventDefault();
        // removeSearchTerm();
        updateProductCategory(category);
        router.push({
            pathname: "/products",
            query: {
                cat: category, //
            },
        });
    };
    return (
        <>
            <ul>
                <li onClick={(e) => selectCategory(e, "")}>
                    <a>All</a>
                </li>
                <li onClick={(e) => selectCategory(e, "Arabic")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt=""
                        />
                        Arabic
                    </a>
                    <span className="count">30</span>
                </li>
                <li onClick={(e) => selectCategory(e, "English")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt=""
                        />
                        English
                    </a>
                    <span className="count">35</span>
                </li>
                <li onClick={(e) => selectCategory(e, "Deutch")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt=""
                        />
                        Deutch{" "}
                    </a>
                    <span className="count">42</span>
                </li>
                <li onClick={(e) => selectCategory(e, "French")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-3.svg"
                            alt=""
                        />
                        French{" "}
                    </a>
                    <span className="count">42</span>
                </li>                
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct);
