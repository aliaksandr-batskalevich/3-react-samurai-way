import React from "react";

export const Content = () => {
    return (
        <div className='content'>
            <div className='backgroundContent'>
            </div>
            <div className='description'>
                <div className='avatar'>
                    <img src="https://99px.ru/sstorage/56/2012/12/mid_76508_1420.jpg" alt="avatar"/>
                </div>
                <div className='aboutMe'>
                    <h2>ABOUT ME</h2>
                    <div className='tableWrapper'>
                        <table>
                            <tr>
                                <th>first name:</th>
                                <td>Aliaksandr</td>
                            </tr>
                            <tr>
                                <th>second name:</th>
                                <td>Batskalevich</td>
                            </tr>
                            <tr>
                                <th>birthday:</th>
                                <td>september 16, 1988</td>
                            </tr>
                            <tr>
                                <th>city:</th>
                                <td>Brest</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='myPosts'>
                <h2>MY POSTS</h2>
                <div className='newPost'>
                    <textarea/>
                    <button>Add post...</button>
                </div>
                <div className='postsWrapper'>
                    <div className='post'>
                        <p>Hello, I am Alex!</p>
                    </div>
                    <div className='post'>
                        <p>Post 2</p>
                    </div>
                    <div className='post'>
                        <p>Post 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}