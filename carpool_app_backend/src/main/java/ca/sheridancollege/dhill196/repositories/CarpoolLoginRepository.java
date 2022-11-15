package ca.sheridancollege.dhill196.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ca.sheridancollege.dhill196.beans.CarpoolLogin;

public interface CarpoolLoginRepository extends JpaRepository<CarpoolLogin, Long> {

}