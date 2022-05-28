import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarCollections'>
                <Link to='top' className='link'>
                    <div className='navbarcollecCard'>
                        <img alt='' src='https://itsblockchain.com/wp-content/uploads/2021/03/itsblockchain-nft-crypto-projects.jpg' className='navbarcollecImage' />

                        <div className='navbarcollecDetails'>
                            <span>Top </span>
                            <Link to='top' className='link'>
                                <button>View Collections</button>
                            </Link>
                        </div>
                    </div>
                </Link>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://www.whoa.in/download/cool-trending-mobile-wallpapers-hd-wallpapers-images-3-mobile-wallpaper' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Trending </span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://art.art/wp-content/uploads/2021/09/fatcat_art.jpg' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Art</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nKAkqNBCUhCf2_DUrHzYxReT_EypIwTv4w4Kx3cuieAsa5IC6ntPNsPpZd6WC4h_wYU&usqp=CAU' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Collectibles</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://blog.ipleaders.in/wp-content/uploads/2021/05/ICANN%E2%80%99s-New-Domain-Name-Transfer-Policy.png' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Domain Names</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F750037840%2F960x0.jpg%3Ffit%3Dscale' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Music</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://dy6k9vx8xmxk5.cloudfront.net/wp-content/uploads/2021/07/d80034-5-2f42694bc351dd92e04d-8.jpg' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Photography</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://www.ballerstatus.com/wp-content/uploads/2021/01/soccer-pexels-pixabay-47730.jpg' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Sports</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://images.ctfassets.net/a9237abdyvg9/3Xi6yNVEg4bBKZgbMIJ1OI/5d71460695666ab8339f4adfae9e67ef/laurie-byrne-LWXKtcBrdcE-unsplash.jpg?fm=webp' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Trading Cards</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDcvYTZiNTU4M2EtMjIzMy00N2NjLWJmYmYtNjRmOGVlZjc2NjM4LmpwZw==.jpg' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Utility</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

                <div className='navbarcollecCard'>
                    <img alt='' src='https://miro.medium.com/max/1400/1*HaNgPEs7k-YqocCJzQxd0Q.jpeg' className='navbarcollecImage' />

                    <div className='navbarcollecDetails'>
                        <span>Virtual Worlds</span>
                        <Link to='viewCollection' className='link'>
                            <button>View Collections</button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}
