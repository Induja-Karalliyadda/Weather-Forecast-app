import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Nav } from 'react-bootstrap'

export default function navbar() {
  return (
    <View>
      <nav className="navbar navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-center">
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </View>
  )
}

const styles = StyleSheet.create({})