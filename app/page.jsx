import Link from 'next/link';
import PhotoButton from '../components/photo-button';

export default function HomePage() {
  return (
    <div id="home">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="little-star" aria-hidden="true">✳</span> A LITTLE SOMETHING, MADE BY HAND</p>
            <h1 id="hero-title">Small stitches.<br />Little <em>joys.</em></h1>
            <p className="intro">Thoughtful crochet pieces to brighten your everyday. A little playful, a little cosy, and full of character.</p>
            <a className="button" href="#collection">Explore the little things <span aria-hidden="true">↓</span></a>
            <div className="hero-footnote"><span aria-hidden="true">〰</span> One loop at a time.</div>
          </div>
          <figure className="hero-photo">
            <PhotoButton filename="flower-pouch.jpg" caption="The flower pouch" alt="Pink crochet drawstring pouch with a purple flower and heart-shaped ties against a blue sky" width={1280} height={960} className="photo-button" priority />
            <figcaption><span>A pocketful of happy</span><span aria-hidden="true">✿</span></figcaption>
          </figure>
        </section>

        <section className="collection container" id="collection" aria-labelledby="collection-title">
          <div className="section-heading">
            <div><p className="eyebrow">THE LITTLE COLLECTION</p><h2 id="collection-title">Meet the little things.</h2></div>
            <p>Soft yarn. A little imagination.<br />Something to make you smile.</p>
          </div>
          <div className="product-grid">
            <article className="product">
              <PhotoButton filename="coffee-companion.jpg" caption="The coffee companion" alt="Cream crochet coffee cup character with a smiling face, rosy cheeks and little brown feet" width={1448} height={1086} className="photo-button product-photo" />
              <div className="product-info"><span className="product-category">A COSY LITTLE FRIEND</span><h3>The coffee companion</h3><p>A cheerful cup for your cosy corner.</p><Link href="/contact/?item=The%20coffee%20companion" className="text-link">Enquire about this <span aria-hidden="true">↗</span></Link></div>
            </article>
            <article className="product">
              <PhotoButton filename="frog-coaster.jpg" caption="The froggy coaster" alt="Playful green crochet frog coaster with a pink tongue peeking out from beneath a ceramic mug" width={1280} height={960} className="photo-button product-photo" />
              <div className="product-info"><span className="product-category">FOR YOUR DAILY CUP</span><h3>The froggy coaster</h3><p>A little company for your coffee break.</p><Link href="/contact/?item=The%20froggy%20coaster" className="text-link">Enquire about this <span aria-hidden="true">↗</span></Link></div>
            </article>
            <article className="product">
              <PhotoButton
                caption="The rose basket"
                className="photo-button product-photo roses"
                images={[
                  {
                    filename: 'rose-basket.jpg',
                    caption: 'The rose basket',
                    alt: 'Pink and red crochet roses gathered in a small brown crochet basket, with colourful yarn in the background',
                    width: 960,
                    height: 1280,
                  },
                  {
                    filename: 'rose-basket-detail.jpg',
                    caption: 'The rose basket, inside and out',
                    alt: 'An open brown crochet basket beside its cream circular lining edged with pink and red roses',
                    width: 1280,
                    height: 790,
                  },
                ]}
              />
              <div className="product-info"><span className="product-category">FLOWERS THAT STAY</span><h3>The rose basket</h3><p>A small bunch of everyday happiness.</p><Link href="/contact/?item=The%20rose%20basket" className="text-link">Enquire about this <span aria-hidden="true">↗</span></Link></div>
            </article>
          </div>
          <div className="featured-note"><span aria-hidden="true">✿</span><p>Spotted the pink pouch up top? <Link href="/contact/?item=The%20flower%20pouch">Ask about the flower pouch <span aria-hidden="true">↗</span></Link></p></div>
        </section>

        <section className="invitation container" aria-labelledby="invitation-title">
          <div><p className="eyebrow">LET’S MAKE SOMETHING LOVELY</p><h2 id="invitation-title">Found your little joy?</h2><p>Ask about a piece, share a colour you love, or just say hello.</p></div>
          <Link className="button" href="/contact/">Get in touch <span aria-hidden="true">↗</span></Link>
        </section>
      </div>
  );
}
