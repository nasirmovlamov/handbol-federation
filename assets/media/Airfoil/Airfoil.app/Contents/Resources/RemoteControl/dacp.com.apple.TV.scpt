FasdUAS 1.101.10   ��   ��    k             l     ��  ��      TV.applescript     � 	 	    T V . a p p l e s c r i p t   
  
 l     ��  ��      RemoteControl     �      R e m o t e C o n t r o l      l     ��������  ��  ��        l     ��  ��    $   Created by qdc - 2019-11-20.     �   <     C r e a t e d   b y   q d c   -   2 0 1 9 - 1 1 - 2 0 .      l     ��  ��    G A  Copyright 2019 Rogue Amoeba Software, LLC. All rights reserved.     �   �     C o p y r i g h t   2 0 1 9   R o g u e   A m o e b a   S o f t w a r e ,   L L C .   A l l   r i g h t s   r e s e r v e d .      l     ��������  ��  ��        i          I      �������� 0 remote_stop  ��  ��     O      ! " ! I   ������
�� .hookStopnull��� ��� null��  ��   " 5     �� #��
�� 
capp # m     $ $ � % %  c o m . a p p l e . T V
�� kfrmID     & ' & l     ��������  ��  ��   '  ( ) ( i     * + * I      �������� 0 remote_play  ��  ��   + O      , - , I   ������
�� .hookPlPsnull��� ��� null��  ��   - 5     �� .��
�� 
capp . m     / / � 0 0  c o m . a p p l e . T V
�� kfrmID   )  1 2 1 l     ��������  ��  ��   2  3 4 3 i     5 6 5 I      �������� 0 remote_previous_item  ��  ��   6 O      7 8 7 I   ������
�� .hookBacknull��� ��� null��  ��   8 5     �� 9��
�� 
capp 9 m     : : � ; ;  c o m . a p p l e . T V
�� kfrmID   4  < = < l     ��������  ��  ��   =  > ? > i     @ A @ I      �������� 0 remote_next_item  ��  ��   A O      B C B I   ������
�� .hookNextnull��� ��� null��  ��   C 5     �� D��
�� 
capp D m     E E � F F  c o m . a p p l e . T V
�� kfrmID   ?  G H G l     ��������  ��  ��   H  I J I i     K L K I      �������� 0 remote_begin_seek_backward  ��  ��   L O      M N M I   ������
�� .hookRwndnull��� ��� null��  ��   N 5     �� O��
�� 
capp O m     P P � Q Q  c o m . a p p l e . T V
�� kfrmID   J  R S R l     ��������  ��  ��   S  T U T i     V W V I      �������� 0 remote_begin_seek_forward  ��  ��   W O      X Y X I   ������
�� .hookFastnull��� ��� null��  ��   Y 5     �� Z��
�� 
capp Z m     [ [ � \ \  c o m . a p p l e . T V
�� kfrmID   U  ] ^ ] l     ��������  ��  ��   ^  _ ` _ i     a b a I      �������� 0 remote_end_seek  ��  ��   b O      c d c I   ������
�� .hookResunull��� ��� null��  ��   d 5     �� e��
�� 
capp e m     f f � g g  c o m . a p p l e . T V
�� kfrmID   `  h i h l     ��������  ��  ��   i  j k j i     l m l I      �������� 0 remote_pause  ��  ��   m O      n o n I   ������
�� .hookPlPsnull��� ��� null��  ��   o 5     �� p��
�� 
capp p m     q q � r r  c o m . a p p l e . T V
�� kfrmID   k  s t s l     ��������  ��  ��   t  u v u i     # w x w I      �������� 0 remote_volume_up  ��  ��   x O     " y z y Z    ! { |�� } { ?    ~  ~ 1    ��
�� 
pVol  m    ���� Z | r     � � � m    ���� d � 1    ��
�� 
pVol��   } r    ! � � � l    ����� � [     � � � 1    ��
�� 
pVol � m    ���� 
��  ��   � 1     ��
�� 
pVol z 5     �� ���
�� 
capp � m     � � � � �  c o m . a p p l e . T V
�� kfrmID   v  � � � l     ��������  ��  ��   �  � � � i   $ ' � � � I      �������� 0 remote_volume_down  ��  ��   � O     " � � � Z    ! � ��� � � A    � � � 1    ��
�� 
pVol � m    ���� 
 � r     � � � m    ����   � 1    ��
�� 
pVol��   � r    ! � � � l    ����� � \     � � � 1    ��
�� 
pVol � m    �� 
��  ��   � 1     �~
�~ 
pVol � 5     �} ��|
�} 
capp � m     � � � � �  c o m . a p p l e . T V
�| kfrmID   �  � � � l     �{�z�y�{  �z  �y   �  � � � i   ( + � � � I      �x�w�v�x 0 remote_mute  �w  �v   � O      � � � r     � � � l    ��u�t � H     � � 1    �s
�s 
pMut�u  �t   � 1    �r
�r 
pMut � 5     �q ��p
�q 
capp � m     � � � � �  c o m . a p p l e . T V
�p kfrmID   �  � � � l     �o�n�m�o  �n  �m   �  � � � i   , / ��l � I      �k�j�i�k 0 remote_shuffle  �j  �i  �l   �  � � � l     �h�g�f�h  �g  �f   �  � � � i   0 3 � � � I      �e�d�c�e 0 remote_restart_item  �d  �c   � O      � � � I   �b�a�`
�b .hookBacknull��� ��� null�a  �`   � 5     �_ ��^
�_ 
capp � m     � � � � �  c o m . a p p l e . T V
�^ kfrmID   �  � � � l     �]�\�[�]  �\  �[   �  � � � i   4 7 ��Z � I      �Y�X�W�Y 0 remote_other  �X  �W  �Z   �  ��V � l     �U�T�S�U  �T  �S  �V       �R � � � � � � � � � � � � � � ��R   � �Q�P�O�N�M�L�K�J�I�H�G�F�E�D�Q 0 remote_stop  �P 0 remote_play  �O 0 remote_previous_item  �N 0 remote_next_item  �M 0 remote_begin_seek_backward  �L 0 remote_begin_seek_forward  �K 0 remote_end_seek  �J 0 remote_pause  �I 0 remote_volume_up  �H 0 remote_volume_down  �G 0 remote_mute  �F 0 remote_shuffle  �E 0 remote_restart_item  �D 0 remote_other   � �C  �B�A � ��@�C 0 remote_stop  �B  �A   �   � �? $�>�=
�? 
capp
�> kfrmID  
�= .hookStopnull��� ��� null�@ )���0 *j U � �< +�;�: � ��9�< 0 remote_play  �;  �:   �   � �8 /�7�6
�8 
capp
�7 kfrmID  
�6 .hookPlPsnull��� ��� null�9 )���0 *j U � �5 6�4�3 � ��2�5 0 remote_previous_item  �4  �3   �   � �1 :�0�/
�1 
capp
�0 kfrmID  
�/ .hookBacknull��� ��� null�2 )���0 *j U � �. A�-�, � ��+�. 0 remote_next_item  �-  �,   �   � �* E�)�(
�* 
capp
�) kfrmID  
�( .hookNextnull��� ��� null�+ )���0 *j U � �' L�&�% � ��$�' 0 remote_begin_seek_backward  �&  �%   �   � �# P�"�!
�# 
capp
�" kfrmID  
�! .hookRwndnull��� ��� null�$ )���0 *j U � �  W�� � ���  0 remote_begin_seek_forward  �  �   �   � � [��
� 
capp
� kfrmID  
� .hookFastnull��� ��� null� )���0 *j U � � b�� � ��� 0 remote_end_seek  �  �   �   � � f��
� 
capp
� kfrmID  
� .hookResunull��� ��� null� )���0 *j U � � m�� � ��� 0 remote_pause  �  �   �   � � q��
� 
capp
� kfrmID  
� .hookPlPsnull��� ��� null� )���0 *j U � � x�
�	 � ��� 0 remote_volume_up  �
  �	   �   � � ������
� 
capp
� kfrmID  
� 
pVol� Z� d� 
� #)���0 *�,� 
�*�,FY *�,�*�,FU � � �� �� � ���� 0 remote_volume_down  �   ��   �   � �� �������
�� 
capp
�� kfrmID  
�� 
pVol�� 
�� #)���0 *�,� 
j*�,FY *�,�*�,FU � �� ����� � ����� 0 remote_mute  ��  ��   �   � �� �����
�� 
capp
�� kfrmID  
�� 
pMut�� )���0 
*�,*�,FU � �������� � ����� 0 remote_shuffle  ��  ��  ��   �   �  �� h � �� ����� � ����� 0 remote_restart_item  ��  ��   �   � �� �����
�� 
capp
�� kfrmID  
�� .hookBacknull��� ��� null�� )���0 *j U � �������� � ����� 0 remote_other  ��  ��  ��   �   �  �� hascr  ��ޭ