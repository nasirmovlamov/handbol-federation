FasdUAS 1.101.10   ��   ��    k             l    i ����  O     i  	  Z    h 
 ���� 
 =       n        1   	 ��
�� 
prun   g    	  m    ��
�� boovtrue  k    d       Q    #     r        1    ��
�� 
pTrk  o      ���� 0 my_track    R      ������
�� .ascrerr ****      � ****��  ��    l    #     L     #   J     "����    1 + iTunes errors if there is no current track     �   V   i T u n e s   e r r o r s   i f   t h e r e   i s   n o   c u r r e n t   t r a c k      l  $ $��������  ��  ��         l  $ $�� ! "��   !   Note: 2013-10    " � # #    N o t e :   2 0 1 3 - 1 0    $ % $ l  $ $�� & '��   & E ? We don't use "my_track" at all below, but only "current track"    ' � ( ( ~   W e   d o n ' t   u s e   " m y _ t r a c k "   a t   a l l   b e l o w ,   b u t   o n l y   " c u r r e n t   t r a c k " %  ) * ) l  $ $�� + ,��   + F @ Because if we use the variable, fetching data from iTunes Radio    , � - - �   B e c a u s e   i f   w e   u s e   t h e   v a r i a b l e ,   f e t c h i n g   d a t a   f r o m   i T u n e s   R a d i o *  . / . l  $ $�� 0 1��   0 @ : fails. Probably internal bug in iTunes with AS references    1 � 2 2 t   f a i l s .   P r o b a b l y   i n t e r n a l   b u g   i n   i T u n e s   w i t h   A S   r e f e r e n c e s /  3 4 3 l  $ $��������  ��  ��   4  5 6 5 r   $ < 7 8 7 n   $ : 9 : 9 J   ' : ; ;  < = < 1   ( *��
�� 
pnam =  > ? > 1   , .��
�� 
pArt ?  @ A @ 1   0 2��
�� 
pAlb A  B�� B 1   4 6��
�� 
pStp��   : 1   $ '��
�� 
pTrk 8 o      ���� 0 my_info   6  C D C l  = =��������  ��  ��   D  E F E l  = =�� G H��   G = 7 Note 2015-08: Don't attempt to read (count of artwork)    H � I I n   N o t e   2 0 1 5 - 0 8 :   D o n ' t   a t t e m p t   t o   r e a d   ( c o u n t   o f   a r t w o r k ) F  J K J l  = =�� L M��   L 5 / iTunes will lie and say 0 even if there is art    M � N N ^   i T u n e s   w i l l   l i e   a n d   s a y   0   e v e n   i f   t h e r e   i s   a r t K  O P O l  = =�� Q R��   Q ? 9 Just try to fetch and catch the error if there isn't any    R � S S r   J u s t   t r y   t o   f e t c h   a n d   c a t c h   t h e   e r r o r   i f   t h e r e   i s n ' t   a n y P  T U T Q   = a V W X V k   @ S Y Y  Z [ Z r   @ L \ ] \ n   @ H ^ _ ^ 1   F H��
�� 
pPCT _ n   @ F ` a ` 4  C F�� b
�� 
cArt b m   D E����  a 1   @ C��
�� 
pTrk ] o      ���� 0 artdata artData [  c�� c r   M S d e d o   M P���� 0 artdata artData e n       f g f  ;   Q R g o   P Q���� 0 my_info  ��   W R      ������
�� .ascrerr ****      � ****��  ��   X r   [ a h i h m   [ ^��
�� 
msng i n       j k j  ;   _ ` k o   ^ _���� 0 my_info   U  l m l l  b b��������  ��  ��   m  n�� n L   b d o o o   b c���� 0 my_info  ��  ��  ��   	 5     �� p��
�� 
capp p m     q q � r r  c o m . a p p l e . M u s i c
�� kfrmID  ��  ��     s�� s l     ��������  ��  ��  ��       �� t u��   t ��
�� .aevtoappnull  �   � **** u �� v���� w x��
�� .aevtoappnull  �   � **** v k     i y y  ����  ��  ��   w   x �� q��������������������������������
�� 
capp
�� kfrmID  
�� 
prun
�� 
pTrk�� 0 my_track  ��  ��  
�� 
pnam
�� 
pArt
�� 
pAlb
�� 
pStp�� �� 0 my_info  
�� 
cArt
�� 
pPCT�� 0 artdata artData
�� 
msng�� j)���0 b*�,e  Y 
*�,E�W 
X  jvO*�,[�,\[�,\[�,\[�,\Z�vE�O *�,�k/�,E` O_ �6FW X  a �6FO�Y hUascr  ��ޭ