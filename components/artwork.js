import Image from 'next/image';

export default function Artwork() {
  return (
    <section>
      <h2>Artwork of the Day</h2>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Wheat_Field_with_Cypresses_-_Google_Art_Project.jpg"
        alt="Wheat Field with Cypresses by Vincent van Gogh"
        width={800}
        height={600}
      />
      <p><em>Wheat Field with Cypresses</em> by Vincent van Gogh</p>
    </section>
  );
}
