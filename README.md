# javascript-custom-tabs
<p>This project demonstrates the implementation of custom tabs using vanilla JavaScript. The tabs dynamically switch between different sections of content, providing a clean and interactive user interface.</p>

<h3>Features</h3>
<ul>
	<li>Dynamic Tab Switching: Each tab displays different content without reloading the page.</li>
	<li>Responsive Design: The tabs are fully responsive and work across all devices.</li>
	<li>Lightweight: The project is built using pure JavaScript, HTML5, and CSS3 with no external dependencies.</li>
	<li>Accessible: The tab component is designed with accessibility in mind, allowing keyboard navigation and proper ARIA attributes.</li>
</ul>

<h3>Installation</h3>
<p>To use this project locally:</p>

<p><strong>1.</strong> Clone the repository to your local machine:</p>
<p>git clone https://github.com/pitambersingh729/javascript-custom-tabs.git</p>

<p><strong>2.</strong> Navigate into the project directory:</p>
<p>cd javascript-custom-tabs</p>

<p><strong>3.</strong> Open the index.html file in your preferred browser to see the tabs in action.</p>

<h3>Usage</h3>
<ul>
	<li>The index.html file contains the HTML structure of the tabs.</li>
	<li>The styles.css file defines the styling for the tab component.</li>
	<li>The script.js file contains the JavaScript logic that enables tab switching.</li>
</ul>

<h3>Customization</h3>
<p>Feel free to modify the content or design of the tabs to fit your needs. You can easily add more tabs by extending the HTML structure and linking them to the corresponding content sections.</p>

<h3>Example Code</h3>
<p>Here's a basic structure of how the tabs work:</p>

<h3>HTML Code:</h3>
<div class="container">
  <div class="tabbing">
    <ul class="tabs">
      <li class="tab-link active" data-target="tab1">Tab 1</li>
      <li class="tab-link" data-target="tab2">Tab 2</li>
      <li class="tab-link" data-target="tab3">Tab 3</li>
    </ul>
    <div class="tabbed-content">
      <div class="tab active" data-target="tab1">
        <h2>Tab 1 Content</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptate, quod, quibusdam, doloremque quae voluptates quia quidem nemo quos autem fugit doloribus. Quisquam, voluptate, quod, quibusdam, doloremque quae voluptates quia quidem nemo quos autem fugit doloribus.</p>
      </div>
      <div class="tab" data-target="tab2">
        <h2>Tab 2 Content</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
      </div>
      <div class="tab" data-target="tab3">
        <h2>Tab 3 Content</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
      </div>
    </div>
  </div>
</div>

<p>The JavaScript logic listens for clicks on the tab items and dynamically updates the visible content.</p>

<h3>Contributing</h3>
<p>If you'd like to contribute to this project, feel free to submit a pull request or open an issue on GitHub.</p>

<h3>License</h3>
<p>This project is licensed under the MIT License.</p>

<p>Feel free to adjust the wording or add any additional sections that you think are necessary. Let me know if you need any further adjustments!</p>