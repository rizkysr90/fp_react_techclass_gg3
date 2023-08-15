## What is it?

Ini adalah repository frontend dari final project technical class saya di Generasi Gigih 3.0. Dibuat dengan MERN stack (Mongo, Express, React, Node) Proyek ini dibuat sebagai penyedia API untuk user interface atau frontend sistem tokopedia play clone yang sudah saya buat.

Backend URL : [https://mid-term-gg3-gg3fsgp0488-production.up.railway.app/api/v1](https://mid-term-gg3-gg3fsgp0488-production.up.railway.app/api/v1)
Frontend URL : [https://fp-react-techclass-gg3.vercel.app](https://fp-react-techclass-gg3.vercel.app/)

## Database Schema

![Schema database](https://ik.imagekit.io/rizkysr90/kakakak_ziV1WYuYI.jpg)
Berikut adalah contoh implementasinya didalam MongoDB :

- Videos Collection
  ![Contoh data collection videos](https://ik.imagekit.io/rizkysr90/Screenshot%20%28773ssss%29__vXEnq14q.jpg)
- Products Collection
  ![Contoh data collection products](https://ik.imagekit.io/rizkysr90/Screenshot%20%28774%29_ZHLPFI8NL.png?updatedAt=1691996586631)
- Comments Collection
  ![Contoh data collection comments](https://ik.imagekit.io/rizkysr90/Screenshot%20%28775%29_edWi9HQfw.png)

## API Spec

### Videos

- Video object

```
{
  id: ObjectId(),
  title_video: string
  thumbnail_video_url: string
  seller : object {username, avatar_url, store_url}
  video_url: string
  products : array of object product
}
```

#### GET /api/v1/videos/

Api ini berfungsi untuk mendapatkan data seluruh collection video yang ada di dalam database.

- **URL Params**  
   None
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response**  
  **Code:** 200  
  **Content:**

```
{
	"metadata" : {
		"status" : 200,
		"msg": "berhasil mendapatkan data"
	},
	"data" : [
			{
				"_id" : "64d52a242d6935f974c09d45",
				"title_video" : "Paham Skincare Dalam 8 Menit",
				"seller" : {
					"username" : "Username 1",
					"avatar_url" : "url foto",
					"store_url" : "url store,
				},
				"video_url" : "https://www.youtube.com/embed/RLZcPLx84Yk"
			}
	]
}
```

#### GET /api/v1/videos/:video_id

API ini berfungsi untuk mendapatkan data suatu video berdasarkan id videonya. Dalam data tersebut terdapat data-data produk yang dijual.

- **URL Params**  
  _Required:_ `video_id = [string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**  
  **Code:** 200  
   **Content:**

```
{
	"metadata" : {
		"status" : 200,
		"msg": "berhasil mendapatkan data"
	},
	"data" : {
				"_id" : "64d52a242d6935f974c09d45",
				"title_video" : "Paham Skincare Dalam 8 Menit",
				"seller" : {
					"username" : "Username 1",
					"avatar_url" : "url foto",
					"store_url" : "url store,
				},
				"video_url" : "https://www.youtube.com/embed/RLZcPLx84Yk",
				"products" : [
					"_id": "64d52a242d6935f974c09d48",
					"thumbnail_product_url": "https://lzd-img-global.slatic.net/g/p/a1e3a322b8b3981d572429636c42264b.jpg_720x720q80.jpg",
				"title_product": "Kahf Gentle Exfoliating Face Scrub 100 ml - Lawan Noda Hitam",
				"price_product": 35000,
				"product_url": "https://www.tokopedia.com/kahfofficial/kahf-gentle-exfoliating-face-scrub-100-ml-lawan-noda-hitam",
				"live_videos": ["64d52a242d6935f974c09d45"],
				"__v": 0,
				"createdAt": "2023-08-10T18:19:16.979Z",
				"updatedAt": "2023-08-10T18:19:16.979Z"
				]
			}
}
```

### Comments

- Comment object

```
{
  id: ObjectId(),
  comment: string
  videoId: objectId
  username : string
  created_at: Date
}
```

#### GET /api/v1/comments/:video_id

API ini berfungsi untuk mendapatkan semua data komentar pada suatu video berdasarkan id videonya.

- **URL Params**  
  _Required:_ `video_id=[string]`
- **Data Params**  
  None
- **Headers**  
  Content-Type: application/json
- **Success Response:**
- **Code:** 200  
  **Content:**

```
{
	"metadata" : {
		"status" : 200,
		"msg": "berhasil mendapatkan data"
	},
	"data" : [
			{
				"_id": "64d6948beaebe2f78e763cb5",
				"comment": "tes",
				"username": "rizkysr90",
				"createdAt": "2023-08-11T20:05:31.948Z"
			}
	]
}
```

#### POST /api/v1/comments

- **URL Params**  
  \*none`
- **Data Params**

  ```
  {
    username: string,
    comment: string,
    video_id: string
  }

  ```

- **Headers**  
  Content-Type: application/json
- **Success Response:**  
  **Code:** 201  
   **Content:**

```
{

	"metadata": {
		"status": 201,
		"msg": "berhasil membuat data baru"
	},
	"data": "64d9dc56cb32a577ba59efe4"
}

```

- **Failed Response:**
  **Code:** 400  
  **Content:**

```
{
	"metadata": {
		"status": 400,
		"msg": "mohon masukkan data yang lengkap"
	},
	"data": {}
}
```

## How To Run

#### Requirement

- Node.js v16++
- MongoDB v6.0.1++

Jika kamu ingin menjalankan proyek ini di local komputer kamu, yang pertama yaitu jalankan program API backend terlebih dahulu dengan langkah-langkah sebagai berikut :

1.  Atur environtment variabel (.env)
    ```
    PORT=
    MONGO_URI=
    ```
    - PORT diisi dengan alamat port yang akan digunakan untuk menjalankan API backend pada local komputer kamu.
    - MONGO_URI adalah alamat mongoDB kamu, biasanya formatnya sepert `'mongodb://host:port/namaDB'`
2.  npm install
    untuk menginstall package-package yang dibutuhkan.
3.  npm run seeder
    Untuk menambahkan seeder data
4.  npm start
    Untuk menjalankan API

Setelah API backend sudah berjalan. Maka kita dapat menjalankan user interfacenya dengan langkah-langkah sebagai berikut :

1. Atur environment variabel

```
REACT_APP_API_URL=
```

Atur REACT_APP_API_URL dengan alamat API backend kamu contohya seperti `"http://localhost:3000"` 2. npm install 3. npm start

Selesai, kamu bisa akses apps nya sesuai dengan konfigurasi port yang sudah kamu atur sebelumya.
