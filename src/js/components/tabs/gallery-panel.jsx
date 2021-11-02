import React from 'react';
import Bg3D from '../bg3d/bg3d';
import Img from '../img/img';


const GalleryPanel = ({ image, heading, title, description, children }) => {
    // React copies props shallowly, so I can't put this in GalleryPanel.defaultProps
    if (! image.position) {
        image.position = 'before';
    }

    return (
        <div className='gallery-panel flex flex-col sm:flex-row items-center py-14 justify-center'>
            { image.position === 'before' &&
                <Bg3D className={image.className} skew={image.skew}>
                    <Img
                        className='z-40'
                        image={image.image}
                    />
                </Bg3D>
            }

            <div className='flex flex-col px-6 pt-4 sm:pt-0 lg:p-16 w-full sm:w-2/3'>
                <h4 className='text-accent-secondary pt-4 md:pt-0'>{heading}</h4>

                <h3 className='py-2 font-black text-3xl sm:text-4xl'>{title}</h3>

                <p className='w-full sm:w-3/4'>
                    { children || description }
                </p> 
            </div>

            { image.position === 'after' &&
                <Bg3D className={image.className} skew={image.skew}>
                    <Img
                        className='z-40'
                        image={image.image}
                    />
                </Bg3D>
            }
        </div>
    )
}

export default GalleryPanel;
