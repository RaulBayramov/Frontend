
import { cart, removeFromCart } from "./data/cart.js";
import { courses } from "./data/data.js";


export function renderCart() {
    let cartSummary = '';
    if (document.querySelector("h3") !== null) {
        document.querySelector("h3").innerHTML = `${cart.length} ${cart.length === 1 ? 'course' : 'courses'} in cart`;
    }
    cart.forEach((cartItem) => {
        let matchCourse = courses.find((course) => cartItem.courseId === course.id);
        cartSummary += `
        <div class="video-preview js-video-preview js-video-preview-${matchCourse.id} data-id="${matchCourse.id || ''}">
            <div class="thumbnail-row">
                <img class="thumbnail" src="${matchCourse.thumbnail}" alt="C++ Course Thumbnail">
                <div class="video-time">${matchCourse.getVideoLength()} hours</div>
            </div>
            <div class="video-info-grid">
                <div class="channel-picture">
                    <img class="profile-picture" src="${matchCourse.instructor.img}" alt="Not Found">
                </div>
                <div class="video-info">
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
                    <span class="delete-quantity-link link-primary js-delete-link js-delete-link-${matchCourse.id}" data-id="${matchCourse.id || ''}">
                         Delete
                    </span>
                </div>
            </div>
        </div>
    `;

    })
    // console.log(cartSummary)
    document.querySelector(".js-video-grid-courses").innerHTML = cartSummary;
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
}
renderCart();


