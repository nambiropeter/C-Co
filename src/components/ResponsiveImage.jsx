/**
 * Serves WebP where it is supported with a JPEG fallback, and lets the browser
 * pick a width that matches the device instead of downloading a desktop-sized
 * file onto a phone. `width`/`height` are always set so the layout does not
 * jump while the image loads.
 */
export default function ResponsiveImage({
    image,
    alt,
    sizes,
    className,
    loading = 'lazy'
}) {
    return (
        <picture>
            <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
            <img
                src={image.src}
                srcSet={image.jpegSrcSet}
                sizes={sizes}
                alt={alt}
                width={image.width}
                height={image.height}
                className={className}
                loading={loading}
                decoding="async"
            />
        </picture>
    );
}
