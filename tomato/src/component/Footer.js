import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

const Footer = () => {
    return(
        <>
            <footer>
            <footer class="text-center bg-light text-muted">
                <section class="d-flex justify-content-center p-4 border-bottom">
                    <div class="me-4 m-2">
                        <span>Get connected with me on social networks:</span>
                    </div>

                    <div>
                        <Link href="https://twitter.com/home" class="me-2 text-reset" target="_blank">
                            <span class="fa-stack fa-lg" style={{fontSize: "20px", color: "#00acee"}}>
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                            </span>
                        </Link>
                        <Link href="https://www.linkedin.com/in/chandra-mouli-082a82178/" class="me-2 text-reset" target="_blank">
                            <span class="fa-stack fa-lg" style={{fontSize:"20px", color: "#0A66C2"}}>
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                            </span>
                        </Link>
                        <Link href="https://github.com/Chandramouli13" class="me-2 text-reset" target="_blank">
                            <span class="fa-stack fa-lg" style={{fontSize:"20px", color: "#333"}}>
                                <i class="fa fa-circle fa-stack-2x"></i>
                                <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                            </span>
                        </Link>
                    </div>
                </section>

                <div class="text-center p-4" style={{backgroundColor: "rgba(0,0,0,0.05)"}}>
                © 2023 Developer CM || code: <Link class="text-reset fw-bold" href="https://github.com/Chandramouli13/Bootstrap-5-Tomato-Home" target="_blank">Github.com</Link>
                </div>
        </footer>
            </footer>
        </>
    )
}

export default Footer