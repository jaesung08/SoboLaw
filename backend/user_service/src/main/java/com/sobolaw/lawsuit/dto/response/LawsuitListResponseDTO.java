package com.sobolaw.lawsuit.dto.response;

import java.time.LocalDateTime;

/**
 * 소장 리스트 출력 DTO 인터페이스.
 */
public interface LawsuitListResponseDTO {

    String getType();

    String getTitle();

    LocalDateTime getCreatedTime();

    String getDefendantName();
}
