import React from 'react'
import { Link } from 'react-router-dom'
import { HiHome } from "react-icons/hi2";

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
      > 
        <HiHome /> Kembali Ke Halaman Utama <HiHome />
      </Link>
    </section>
  )
}

export default NotFoundPage