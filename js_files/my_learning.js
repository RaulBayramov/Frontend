
import { cart, removeFromCart } from "./data/cart.js";
import { courses } from "./data/data.js";
import { formatCurrency } from "./utils/formatCurrency.js";


export function renderCart() {
    let cartSummary = '';
    cart.forEach((cartItem) => {
        let matchCourse = courses.find((course) => cartItem.courseId === course.id);
        cartSummary += `
        <div class="video-preview js-video-preview js-video-preview-${matchCourse.id} data-id="${matchCourse.id || ''}">
            <div class="thumbnail-row">
                <img class="thumbnail" src="${matchCourse.thumbnail}" alt="C++ Course Thumbnail">
            </div>
            <div class="video-info-grid">
                <div class="video-info js-video-info-${matchCourse.id}">
                    <p class="video-title">
                        ${matchCourse.name}
                    </p>
                    <p class="video-author">
                        <a href="${matchCourse.instructor.aboutInstructor}" target="_blank" rel="noopener noreferrer">
                            ${matchCourse.instructor.name}
                        </a>
                    </p>
                    <div class="rating">
                        <img src="../ratings/rating-${matchCourse.rating}.png" class="rating_img">
                    </div>
                    <p class="video-stats">
                        ${matchCourse.videoInfo.viewCount} views &#183; ${matchCourse.timeAgo()}
                    </p>
                </div>
            </div>
            <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchCourse.id}" data-id="${matchCourse.id || ''}">
                Delete
            </span>
            <div class="js-price-${matchCourse.id}">
                <p>${formatCurrency(matchCourse.price)}</p>
            </div>
        </div>
    `;

    })
    const content = `<h3 class="course-quantity js-course-quantity">Hello</h3>`;
    document.querySelector(".js-video-grid-courses").innerHTML = content + cartSummary;
    if (document.querySelector(".js-course-quantity") !== null) {
        document.querySelector(".js-course-quantity").innerHTML = `${cart.length} ${cart.length === 1 ? 'course' : 'courses'} in cart`;
    }
    // console.log(document.querySelector(".js-video-grid-courses").innerHTML)
    document.querySelectorAll(".delete-quantity-link").forEach((link) => {
        let courseId = link.dataset.id;
        link.addEventListener('click', () => {
            removeFromCart(courseId);
            // console.log(cart)
            const container = document.querySelector(`.js-video-preview-${courseId}`);
            container.remove();
            renderCart();
            if (document.querySelector(".cart-quantity")) {
                document.querySelector(".cart-quantity").innerHTML = cart.length;
            }
        })

    })

    let videoPrew = document.querySelectorAll(".thumbnail");
    videoPrew.forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "video_playlist.html"
        })
    });
    function changeOrder() {
        cart.forEach((forEveryItem) => {
            const element = document.querySelector(`.js-delete-link-${forEveryItem.courseId}`);
            const videoInfoGrid = document.querySelector(`.js-video-info-${forEveryItem.courseId}`);
            if (window.innerWidth <= 675) {
                videoInfoGrid.appendChild(element);
            }
            else {
                const videoPrew = document.querySelector(`.js-video-preview-${forEveryItem.courseId}`);
                const price = document.querySelector(`.js-price-${forEveryItem.courseId}`)
                videoPrew.appendChild(element);
                videoPrew.insertBefore(element, price)

            }
        })
    }
    window.addEventListener('load', changeOrder);
    window.addEventListener('resize', changeOrder);
}
renderCart();


