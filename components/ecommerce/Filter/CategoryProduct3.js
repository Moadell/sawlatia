import { useRouter } from "next/router";
import { connect } from "react-redux";
import { updateProductCategory } from "../../../redux/action/productFiltersAction";

const CategoryProduct3 = ({ updateProductCategory }) => {




    const router = useRouter();

    // const removeSearchTerm = () => {
    //     router.push({
    //         pathname: "/products",
    //     });
    // };

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
            <ul  className="end">
                <li onClick={(e) => selectCategory(e, "English")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-1.svg"
                            alt=""
                        />
                        English 
                    </a>
                    
                </li>
                <li onClick={(e) => selectCategory(e, "French")}>
                    <a>
                        <img
                            src="/assets/imgs/theme/icons/category-2.svg"
                            alt=""
                        />
                        French
                    </a>
                    
                </li>
               
            </ul>
        </>
    );
};

export default connect(null, { updateProductCategory })(CategoryProduct3);
