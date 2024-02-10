import React, { useState } from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {

    const [description, setDescription] = useState('Description')
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className={`descriptionbox-nav-box ${description==='Reviews' && 'fade'}`} onClick={() => setDescription('Description')}>Description</div>
                <div className={`descriptionbox-nav-box ${description==='Description' && 'fade'}`} onClick={() => setDescription('Reviews')}>Reviews</div>
            </div>
            {description === 'Description' ?
                <div className="descriptionbox-description" >
                    <span>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat ipsa maiores dignissimos eos reprehenderit, similique consectetur facilis beatae nemo error expedita consequatur ullam praesentium recusandae debitis quidem unde? Corporis, eius. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt excepturi ab minima ipsum reiciendis in saepe
                    </span>
                    <span>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel cupiditate a labore, ut qui incidunt itaque perferendis neque, rem repellendus veniam nisi iste, voluptatum reprehenderit reiciendis! Accusantium beatae reprehenderit sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil et dolor, numquam minima alias, at repellat non mollitia vel quisquam, quo eligendi velit doloremque. Atque qui dolore eaque est inventore.
                    </span>
                </div> :
                <div className="descriptionbox-description" >
                    <p>"Absolutely love the variety of shirts at your store! From vibrant patterns to classic designs, there's something for every style. Keep up the fantastic work!"</p>

                    <p>"I can't get enough of the quality and comfort of your shirts! They're my go-to for both casual outings and special occasions. Thank you for consistently delivering such amazing products!"</p>

                    <p>"Your shirt store has completely transformed my wardrobe! The trendy designs and excellent fit make me feel confident every time I wear one of your shirts. Definitely my favorite place to shop!"</p>
                </div>
            }

        </div>
    )
}

export default DescriptionBox