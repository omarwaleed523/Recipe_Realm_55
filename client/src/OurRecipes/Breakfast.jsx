import React from 'react';
import Navbar from 'scenes/navbar';
import "./Types.css";

const Breakfast = () => {
    return (
        <>
        <Navbar />
        <div>
            <div className="mainc">
                <h1 className="h1c">Delicious Oatmeal</h1>
                <img 
                    src="https://www.allrecipes.com/thmb/rkXZ_4CvBLwLDB8M2SjX6uSHf9A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8624357_Mexican-Oatmeal_Yolanda-Gutierrez_original-1ccd93c6233a4a4e81bcf83494b1693d.jpg" 
                    alt="Delicious Oatmeal" 
                    width="500" 
                    height="500" 
                    className="imgc"
                />
                <div className="mntl-structured-ingredients">
                    <div className="loc heading">
                        <h2 className="h2c mntl-structured-ingredients__heading">Ingredients</h2>
                    </div>
                    <ul className="mntl-structured-ingredients__list">
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1 cup water</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1 Mexican cinnamon stick</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/2 cup quick-cooking oats</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/2 cup milk</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1 tablespoon piloncillo, or to taste</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/2 teaspoon ground cinnamon</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/2 teaspoon vanilla extract</p>
                        </li>
                    </ul>
                </div>
                <h3 className="h3c">Recipe Directions</h3>
                <ol className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--OL olc">
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Bring water and cinnamon stick to a boil in a saucepan. Reduce heat and simmer for 5 minutes.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Add oats and cook for 1 minute. Add milk and cook until thickened, 1 to 2 minutes. Remove from heat. Stir in piloncillo, cinnamon, and vanilla.</p>
                    </li>
                </ol>
            </div>
               
            <div className="mainc">
                <h1 className="h1c">Croissant French Toast Bake</h1>
                <img 
                    src="https://www.allrecipes.com/thmb/02VgvKXH50e-ZlA1wEZAZuHwl7M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8415810-Croissant-French-Toast-Bake-ddmfs-beauty-4x3-2281-f2a48a2261844e31a85b28a97fd59725.jpg" 
                    alt="Croissant French Toast Bake" 
                    width="500" 
                    height="500" 
                    className="imgc"
                />
                <div className="mntl-structured-ingredients">
                    <div className="loc heading">
                        <h2 className="h2c mntl-structured-ingredients__heading">Ingredients</h2>
                    </div>
                    <ul className="mntl-structured-ingredients__list">
                        <li className="mntl-structured-ingredients__list-item">
                            <p>cooking spray</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>6 large eggs</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1 cup milk</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/2 cup heavy cream</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>2 tablespoons brown sugar</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>2 teaspoons vanilla extract</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>2 teaspoons ground cinnamon</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1/4 teaspoon salt</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>8 large croissants (about 1 1/4 pounds), halved horizontally</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>confectioner's sugar, fresh berries, or maple syrup for serving</p>
                        </li>
                    </ul>
                </div>
                <h3 className="h3c">Recipe Directions</h3>
                <ol className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--OL olc">
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Gather all ingredients. Preheat the oven to 350 degrees F (175 degrees C). Generously coat a 9x13-inch baking dish with nonstick cooking spray.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Whisk together eggs, milk, heavy cream, brown sugar, vanilla, cinnamon, and salt in a large bowl.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        
                    <p>Dip each croissant half in the egg mixture until fully soaked.</p>
</li>
<li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
    <p>Arrange dipped croissants in the prepared baking dish, overlapping as needed. Pour any remaining egg mixture over croissants.</p>
</li>
<li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
    <p>Bake in the preheated oven until golden brown and a knife inserted in the center comes out clean, about 30 minutes.</p>
</li>
<li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
    <p>Let stand 15 minutes before serving. Serve with desired toppings.</p>
</li>
</ol>
            
                
            </div>
            
                <div className="mainc">
                <h1>Sheet Pan Buttermilk Pancakes</h1>
                <img 
                    src="https://www.allrecipes.com/thmb/8SNeImlWLM2_LtnN_FhleuRn4Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Sheet-Pan-Buttermilk-Pancakes-fabeveryday-1d7584eb6f404835afcfe44bc130b6fd.jpg" 
                    alt="Sheet Pan Buttermilk Pancakes" 
                    width="500" 
                    height="500" 
                    className="imgc"
                />
                <div className="mntl-structured-ingredients">
                    <div className="loc heading">
                        <h2 className="h2c mntl-structured-ingredients__heading">Ingredients</h2>
                    </div>
                    <ul className="mntl-structured-ingredients__list">
                        <li className="mntl-structured-ingredients__list-item">
                            <p>cooking spray</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>3 cups baking mix (such as Bisquick®)</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>2 cups buttermilk</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>4 large eggs</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1¼ cup granulated sugar</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1½ teaspoon vanilla extract</p>
                        </li>
                        <li className="mntl-structured-ingredients__list-item">
                            <p>1¼ teaspoon ground cinnamon</p>
                        </li>
                    </ul>
                </div>
                <h3 className="h3c">Recipe Directions</h3>
                <ol className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--OL olc">
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Gather all ingredients. Preheat the oven to 425 degrees F (220 degrees C). Spray a rimmed baking sheet with cooking spray.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Whisk together baking mix, buttermilk, eggs, sugar, vanilla, and cinnamon in a large bowl until blended. Pour batter onto the prepared baking sheet, spreading to the edges.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Bake in the preheated oven until golden brown, 15 to 18 minutes. Let cool for 5 minutes before slicing into squares.</p>
                    </li>
                    <li className="mntl-sc-block mntl-sc-block-startgroup mntl-sc-block-group--LI lic">
                        <p>Serve with desired toppings.</p>
                    </li>
                </ol>
            </div>
        </div>
        </>
    );
};

export default Breakfast;