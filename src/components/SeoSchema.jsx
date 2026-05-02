export default function SeoSchema({ schema }) {
    const schemas = Array.isArray(schema) ? schema : [schema];

    return (
        <>
            {schemas.map((item, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
                />
            ))}
        </>
    );
}
