import { header } from "./shares/header.js";
import { cart, removeFromCart } from "./data/cart.js";
import { courses } from "./data/data.js";

header();
function renderCart() {
    let cartSummary = '';
    document.querySelector("h3").innerHTML = `${cart.length} proucts in cart`;
    cart.forEach((cartItem) => {
        let matchCourse = courses.find((course) => cartItem.courseId === course.id);
        cartSummary += `
        <div class="video-preview js-video-preview-${matchCourse.id}">
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
                    <p class="video-stats">
                        ${matchCourse.videoInfo.viewCount} views &#183; ${matchCourse.videoInfo.loadedTime}
                    </p>
                    <span class="delete-quantity-link link-primary js-delete-link" data-course-id="${matchCourse.id}">
                        Delete
                    </span>
                </div>
            </div>
        </div>
    `;

    })
    document.querySelector(".container").innerHTML = cartSummary;
    document.querySelectorAll(".js-delete-link").forEach((link) => {
        let courseId = link.dataset.courseId;

        link.addEventListener('click', () => {
            removeFromCart(courseId);
            console.log(courseId)
            const container = document.querySelector(`.js-video-preview-${courseId}`);
            container.remove();
            renderCart();
            document.querySelector(".cart-quantity").innerHTML = cart.length;
        })

    })
    let videoPrew = document.querySelectorAll(".thumbnail-row");
    videoPrew.forEach(element => {
        element.addEventListener("click", function () {
            window.location.href = "video_playlist.html"
        })
    });
}
renderCart();
