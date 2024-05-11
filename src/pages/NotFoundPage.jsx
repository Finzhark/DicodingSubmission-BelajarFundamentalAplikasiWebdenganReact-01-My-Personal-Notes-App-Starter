import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section>
      <h2 className="not-found_404">
        404
      </h2>
      <p className='not-found_text'>
        Halaman Tidak Ditemukan
      </p>
      <Link 
        to='/'
        className='not-found_back-to-home'
      >Kembali Ke Halaman Utama</Link>
    </section>
  )
}

export default NotFoundPage